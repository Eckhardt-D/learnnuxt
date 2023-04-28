declare global {
  interface Window {
    usermaven(id: "id", payload: any): void;
    usermaven(
      track: "track",
      name: string,
      payload?: { [key: string]: string }
    ): void;
  }
}

export {};
