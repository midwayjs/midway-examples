import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";

describe("test/controller/api.test.ts", () => {
  it("should GET /api/create", async () => {
    const app = await createApp<Framework>();
    const createResult = await createHttpRequest(app).get("/api/create");

    expect(createResult.status).toBe(200);
    expect(createResult.body.message).toBe("OK");
    expect(createResult.body.data).toEqual({
      id: 1,
      name: "abc123",
    });

    const queryResult = await createHttpRequest(app).get("/api/users");

    expect(queryResult.status).toBe(200);
    expect(queryResult.body.message).toBe("OK");
    expect(queryResult.body.data[0]).toEqual({
      id: 1,
      name: "abc123",
    });

    await close(app);
  });
});
