"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("./entity");
const typeorm_1 = require("typeorm");
const test = () => __awaiter(this, void 0, void 0, function* () {
    console.log("begin test");
    yield typeorm_1.createConnection({
        type: "mongodb",
        host: "localhost",
        port: 27017,
        database: "test",
        entities: [entity_1.PackageSettings]
    });
    console.log("connected to database");
    const repository = typeorm_1.getMongoRepository(entity_1.PackageSettings);
    const entity = repository.create({
        name: "foo",
        value: {
            bar: "baz"
        }
    });
    console.log("entity created", entity);
    yield repository.save(entity);
    console.log("entity saved", entity);
    console.log("end test");
});
test();
