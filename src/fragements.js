export const COMMENT_FRAGEMENT = `
    fragment CommentParts on Comment{
        id
        text
        user{
            username
        }
    }
`;