import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const updatePost = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    
    });

    console.log(post);
  };

  return (
    <section className="w-full max-w-full flex-start flex-col flex">
      <h1 className="head_text text-left ">
        <span className="blue_gradient">{type} posts</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col"
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            name="prompt"
            onChange={updatePost}
            placeholder="Write your prompts here"
            className="form_textarea"
          />
        </label>

        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
          Tag {''}
          <span className="font-normal">(#product, #webdevelopment, #idea)</span>
          </span>
          <input
            value={post.tag}
            name="tag"
            onChange={updatePost}
            placeholder="#tag"
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4 mt-5">
          <Link href='#' className="text-gray-500">Cancel</Link>


          <button type="submit" disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>{submitting ? `${type}....` : type}</button>
        </div>
      </form>

    </section>
  );
};

export default Form;
