function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const blog = async () => {
  await sleep();

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   next: { revalidate: 30 },
  // });

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  console.log(await res.json());

  return (
    <div>
      <h1>Blog {new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default blog;
