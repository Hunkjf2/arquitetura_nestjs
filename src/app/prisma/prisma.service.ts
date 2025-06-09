import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    constructor() { 
        super({
            log: ['error','info','query','warn'],
            errorFormat: "colorless"
        });
    }
    
    async onModuleInit() {
        try {
            await this.$connect();
        } catch (e) {
            console.log(e);
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

}