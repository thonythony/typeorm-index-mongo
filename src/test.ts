import { PackageSettings } from "./entity";
import { createConnection, getMongoRepository } from "typeorm";

const test = async () => {
  console.log("begin test");
  await createConnection({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
    entities: [PackageSettings]
  });

  console.log("connected to database");

  const repository = getMongoRepository(PackageSettings);

  const entity = repository.create({
    name: "foo",
    value: {
      bar: "baz"
    }
  });

  console.log("entity created", entity);

  await repository.save(entity);
  console.log("entity saved", entity);
  console.log("end test");
};

test();
