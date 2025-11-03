import { NextFunction, Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'

/**
 * Middleware для очистки входных данных от HTML-тегов.
 */
export function cleanRequestBody(
    req: Request,
    _res: Response,
    next: NextFunction
): void {
    const sanitized: Record<string, any> = {}
    for (const [key, value] of Object.entries(req.body ?? {})) {
        sanitized[key] =
            typeof value === 'string'
                ? sanitizeHtml(value, {
                      allowedTags: [],
                      allowedAttributes: {},
                      disallowedTagsMode: 'discard',
                  })
                : value
    }

    req.body = sanitized
    next()
}
