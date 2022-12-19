import swaggerJSDoc from 'swagger-jsdoc'
import path from 'path'
import swaggerAutogen from 'swagger-autogen'

const file = path.join(__dirname, '../routes/v1/index.ts')

const outputFile = ('./swagger_output.json')

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'knowme.API api doc',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        components: {
            securitySchema: {
                bearerAuth: {
                    type: 'http',
                    schema: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: [file],
}

export default async function swaggerGenarateDoc() {
    try {
        swaggerAutogen()(outputFile, [file], options).then(async () => {
            await import('../../index') // Your project's root file
        })

        return true
    } catch (error) {
        return false
    }
}

