// State global untuk pelacak proses simpan data di seluruh aplikasi
const listeners = new Set();
let isSaving = false;
let activeCount = 0;

export function setGlobalSaving(saving) {
  if (saving) {
    activeCount++;
    if (!isSaving) {
      isSaving = true;
      notify();
    }
  } else {
    activeCount = Math.max(0, activeCount - 1);
    if (activeCount === 0 && isSaving) {
      isSaving = false;
      notify();
    }
  }
}

function notify() {
  listeners.forEach((listener) => {
    try {
      listener(isSaving);
    } catch (err) {
      console.error('Error notifying saving listener:', err);
    }
  });
}

export function subscribeSaving(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getIsSaving() {
  return isSaving;
}
