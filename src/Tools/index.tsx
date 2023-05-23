import Card from "../Components/Card";
import FadeIn from "../Components/FadeIn";

export default function Tools() {
  return (
    <FadeIn id="tools" className="flex flex-col gap-20 items-center w-full">
      <h1 className="text-2xl align-center text-primary" id="tools"></h1>
      <div className="flex gap-2 items-center max-w-5xl w-full">
        <div className={"flex justify-between gap-4"}>
          <Card
            title="React"
            desc="teste"
            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          />
          <Card
            title="React"
            desc="teste"
            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          />
          <Card
            title="React"
            desc="teste"
            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          />
          <Card
            title="React"
            desc="teste"
            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          />
          <Card
            title="React"
            desc="teste"
            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          />
        </div>
      </div>
    </FadeIn>
  );
}
