import PostContent from "@/components/posts/post-detail/post-content";
import { getAllPosts, getPostV2 } from "@/lib/api-utils";
import { Spinner } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function SlugPage(props) {
  const router = useRouter();

  // useEffect(() => {
  //   async function getPostV2() {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch(`/api/posts/${props.id}`);

  //       if (res.ok) {
  //         const data = await res.json();
  //         setPost(data.post);
  //       } else {
  //         router.push("/404");
  //       }
  //     } catch (error) {
  //       router.push("/500");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   getPostV2();
  // }, [props.id]);

  if (router.isFallback) {
    return (
      <Spinner
        variant="style"
        emptyColor="gray.200"
        thickness="4px"
        speed="0.65s"
      />
    );
  }
  // if (isLoading) {
  //   return (
  //     <Heading textAlign="center" as="h4" size="md">
  //       Loading...
  //     </Heading>
  //   );
  // }

  return (
    <Fragment>
      {/* {post && (
        <Fragment>
          <Head>
            <title>{post.title || "Title post"}</title>
            <meta
              name="description"
              content={post.abstract || "Abstract post"}
            />
          </Head>
          <PostContent post={post} />
        </Fragment>
      )} */}

      <Head>
        <title>{props.post.title || "Title post"}</title>
        <meta
          name="description"
          content={props.post.abstract || "Abstract post"}
        />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const data = await getAllPosts();

  if (!data) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const slugs = data.posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: slugs,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await getPostV2(slug);

  if (data.code === "get_detail_posts_failed") {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  if (data.code === "not_connect_database") {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }

  return {
    props: { post: data.post },
    // props: { id },
    revalidate: 10,
  };
}
