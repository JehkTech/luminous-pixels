import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { client } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/queries";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

export const metadata: Metadata = {
  title: "Blog — AI Automation Insights",
  description:
    "Practical guides, case studies, and industry insights on AI automation for service businesses.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(blogPostsQuery);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Header */}
        <section
          className="section-padding"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-md" style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-brand)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "1rem",
                fontFamily: "var(--font-display)",
              }}
            >
              Blog
            </div>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Insights on AI automation
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                fontWeight: 300,
              }}
            >
              Practical guides and thinking on building intelligent workflows for
              service businesses.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="section-padding">
          <div className="container-lg">
            {posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "4rem 0" }}>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
                  Posts coming soon. Check back shortly.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    style={{ textDecoration: "none" }}
                  >
                    <article
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden",
                        transition: "all 0.25s var(--ease-smooth)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-brand)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 40px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* Cover image placeholder */}
                      {post.coverImageUrl ? (
                        <div
                          style={{
                            height: 180,
                            background: `url(${post.coverImageUrl}) center/cover`,
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            height: 180,
                            background:
                              "linear-gradient(135deg, var(--brand-900), var(--brand-700))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2rem",
                            opacity: 0.4,
                          }}
                        />
                      )}

                      <div
                        style={{
                          padding: "1.5rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                          flex: 1,
                        }}
                      >
                        {post.category && (
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: "var(--text-brand)",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              fontFamily: "var(--font-display)",
                            }}
                          >
                            {post.category}
                          </span>
                        )}

                        <h2
                          style={{
                            fontSize: "1.0625rem",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            color: "var(--text-primary)",
                            lineHeight: 1.35,
                          }}
                        >
                          {post.title}
                        </h2>

                        {post.excerpt && (
                          <p
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--text-secondary)",
                              lineHeight: 1.6,
                            }}
                          >
                            {post.excerpt}
                          </p>
                        )}

                        <div
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--text-muted)",
                            marginTop: "auto",
                            paddingTop: "0.5rem",
                          }}
                        >
                          {post.publishedAt
                            ? formatDate(post.publishedAt)
                            : "Coming soon"}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
