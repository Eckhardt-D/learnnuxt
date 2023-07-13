import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export default () => {
  const { $auth } = useNuxtApp();
  const user = useState<null | User>("user", () => null);

  const create = async (email: string, password: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      user.value = response.user;
      return user.value;
    } catch (error) {
      throw new Error(
        "Could not create your account, please check your details and try again"
      );
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      user.value = response.user;
      useCookie('learn_nuxt_token_v1').value = await response.user.getIdToken();
      return user.value;
    } catch (error) {
      throw new Error(
        "Something went wrong, please try again"
      );
    }
  }

  const refresh = async () => {
    if ($auth.currentUser) {
      user.value = $auth.currentUser
      return user.value
    }

    user.value = await new Promise((resolve, reject) => {
      onAuthStateChanged($auth, (user) => {
        console.log(user)
        return resolve(user);
      })
    })
    return user.value
  }

  const logout = async () => {
    await signOut($auth);
    user.value = null;
    useCookie('learn_nuxt_token_v1').value = null;
    location.href = '/'
  }

  return {
    user,
    create,
    login,
    refresh,
    logout,
  };
};
