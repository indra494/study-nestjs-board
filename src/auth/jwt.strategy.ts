import { Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm/repository/Repository";
import { UnauthorizedException } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as config from "config";

const jwtConfig = config.get('jwt');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {
        super({
            secretOrKey: jwtConfig.secret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload) {
        const {username} = payload;
        const user: User = await this.userRepository.findOne({where: { username }});

        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

}