import connection from "../database/connect";

beforeAll(async () => {
	await connection.create();
});

afterAll(async () => {
	await connection.close();
});

beforeEach(async () => {
	await connection.clear();
});

describe("Init all tests", () => {
	it("creates a single test", async () => {
		expect(1 + 2).toBe(3);
	});
});
