import { connectToDatabase } from "@utils/database";


export const GET = async (request) => {
    try {
        await connectToDatabase();

        const prompts = await PromptCard.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), {status: 200, headers: {'Content-Type': 'application/json'}});
    } catch(error) {
        console.log(error);
        
        return new Response("Failed to fetch all prompts", {status: 500, headers: {'Content-Type': 'application/json'}});
    }
}