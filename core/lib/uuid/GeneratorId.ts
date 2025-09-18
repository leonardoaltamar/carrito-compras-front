import { v4 as uuidv4 } from "uuid";
export class GeneratorId {
    static generateId() {
        return uuidv4();
    }
}