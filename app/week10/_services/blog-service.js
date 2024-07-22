import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase"

export async function dbAddBlogPost(userId, blogPostObj){
    try {
        const collectionReference = collection(db,"users",userId,"blog-posts");
        const addedBlogPostPromise = await addDoc(collectionReference,blogPostObj);
        console.log(addedBlogPostPromise.id);
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetAllPosts(userId, updatePostList){
    const collectionReference = collection(db,"users",userId,"blog-posts");
    const blogPostQuery = query( collectionReference );
    const querySnapshot = await getDocs(blogPostQuery);
    const blogPostList = [];
    querySnapshot.forEach( (doc) => {
        let thisPost = {
            id: doc.id,
            ...doc.data()
        }
        blogPostList.push(thisPost);
    } );
    // return blogPostList;
    updatePostList(blogPostList);
}

export async function dbGetPost(userId, postId, updateBlogPost){
    const docRef = doc(db, "users", userId, "blog-posts", postId);
    const documentSnapshot = await getDoc(docRef);
    if (documentSnapshot.exists()) {
        updateBlogPost( documentSnapshot.data() );
    } else {
        console.log("No such post!");
    }
}