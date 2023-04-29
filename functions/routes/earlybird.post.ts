import { readBodySafe } from "../util";
import { applicationDefault } from "firebase-admin/app";
import { z } from "zod";

const earlyBirdSchema = z.object({
  email: z.string().email(),
});

export default eventHandler(async (event) => {
  const { logger } = await import("firebase-functions");
  const { initializeApp, getApps, cert } = await import("firebase-admin/app");
  const { getFirestore } = await import("firebase-admin/firestore");
  const { serviceAccountPath, isDevelopment } = useRuntimeConfig();

  const app =
    getApps()[0] ??
    initializeApp({
      projectId: "kaizen-nuxt-course",
      credential:
        isDevelopment && serviceAccountPath
          ? cert(serviceAccountPath)
          : applicationDefault(),
    });

  const db = getFirestore(app);
  const body = await readBodySafe(event);
  const params = body.data ?? body;

  try {
    const { email } = earlyBirdSchema.parse(params);
    const ref = db.collection("earlybirds").doc(email);
    const doc = await ref.get();

    if (doc.exists) {
      throw new Error("USER_EXISTS");
    }

    await ref.set({ created_at: new Date(), email });

    return {
      data: {
        success: true,
        error: null,
      },
    };
  } catch (error) {
    logger.error(error);

    return {
      data: {
        success: false,
        error: {
          reason: (error as Error).message,
          message: "Could not register your email, please try again.",
        },
      },
    };
  }
});
