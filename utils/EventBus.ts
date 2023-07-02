type TProps = Record<string, unknown>;
type TVoidCallback = (...args: TProps[]) => void;
export type EventBusInstance = InstanceType<typeof EventBus>;

interface Listeners {
  [key: string]: TVoidCallback[];
}
class EventBus {
  listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: TVoidCallback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: TVoidCallback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: TProps[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventBus;
