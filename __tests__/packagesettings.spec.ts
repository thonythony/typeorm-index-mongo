import "jest";
import { PackageSettings } from "../src/entity";
import { createConnection, getMongoRepository } from "typeorm";

describe("Test PackageSetting", () => {
  beforeAll(async () => {
    console.log(
      "CONNECT TO MONGODB AT localhost AND PORT ",
      global.__MONGO_PORT__
    );
    this.connection = await createConnection({
      type: "mongodb",
      host: "localhost",
      port: global.__MONGO_PORT__,
      database: global.__MONGO_DB_NAME__,
      entities: [PackageSettings]
    });
  });

  it(
    "should create index",
    async done => {
      const repository = getMongoRepository(PackageSettings);

      const entity = repository.create({
        name: "foo",
        value: {
          bar: "baz"
        }
      });

      await repository.save(entity);

      setTimeout(() => {
        done();
      }, 120000);
    },
    120000
  ); // set 2min timeout for time to check manually the db

  afterAll(() => {
    this.connection.close();
  });
});
