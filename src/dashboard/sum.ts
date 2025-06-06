export interface WorkerMessage {
  type: "calculateSum";
  payload: {
    limit: number;
  };
}
export interface WorkerResult {
  type: "calculationComplete";
  result: number;
}

declare const self: DedicatedWorkerGlobalScope;

self.onmessage = function (event: MessageEvent<WorkerMessage>) {
  const { type, payload } = event.data;
  console.log("worker");
  if (type === "calculateSum") {
    const { limit } = payload;
    let sum: number = 0;
    for (let i = 0; i < limit; i++) {
      sum += i;
    }
    const resultMessage: WorkerResult = {
      type: "calculationComplete",
      result: sum,
    };
    self.postMessage(resultMessage);
  } else {
    console.warn("Worker received an unknown message type:", type);
  }
};
