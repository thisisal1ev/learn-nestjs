import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const req = context.switchToHttp().getRequest()
		const isAuth = req.headers.authorization === 'secret'

		if (!isAuth) throw new UnauthorizedException('Not authorized')
		return isAuth
	}
}