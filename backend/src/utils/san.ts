import sanitizeHtml from 'sanitize-html'

export const sanitizeInput = (input: string): string =>
    sanitizeHtml(input, {
        allowedTags: [],
        allowedAttributes: {},
        disallowedTagsMode: 'discard',
    })
