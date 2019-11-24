import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGEMENT, FULL_POST_FRAGMENT } from "../../../fragements";

export default{
    Query:{
        seeFullPost: async(_, args) => {
            const { id } = args;
            return await prisma.post({ id }).$fragment(FULL_POST_FRAGMENT);
        }
    }
}