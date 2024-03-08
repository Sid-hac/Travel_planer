
import { Redis } from "ioredis";

const redis = process.env.REDIS_URL || "redis://localhost:6379";

const connection = new Redis(redis , {maxRetriesPerRequest: null});

export {connection};