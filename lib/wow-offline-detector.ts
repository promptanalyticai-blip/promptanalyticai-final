// lib/wow-offline-detector.ts

export function listenWOWOfflineStatus(callback: Function) {
  function update() {
    callback(!navigator.onLine);
  }

  window.addEventListener("online", update);
  window.addEventListener("offline", update);

  update(); // estado inicial

  return () => {
    window.removeEventListener("online", update);
    window.removeEventListener("offline", update);
  };
}
