import { JwtPayload } from 'jsonwebtoken'

export interface DecodedPayload extends JwtPayload {
    email: string
}
