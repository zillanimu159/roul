
import styles from './NewPost.module.css';
import Modal from '../components/Modal';
import { Form, Link, redirect } from 'react-router-dom';

function NewPost({ onAddPost }) {
    return (
        <Modal>
            <Form method='post' className={styles.form}>
                <p>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea id="ingredients" name="ingredients" required rows={3}/>
                </p>
                <p>
                    <label htmlFor="steps">Steps</label>
                    <textarea id="steps" name="steps" required rows={3}/>
                </p>
                <p>
                    <label htmlFor="title">Recipe Name</label>
                    <input type="title" id="title" name="title" required />
                </p>
                <p className={styles.actions}>
                    <Link type='button' to="..">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({ request }){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    console.log(postData)
    await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: { 'Content-Type': 'application/json' }
    });
    
    return redirect("/");
}