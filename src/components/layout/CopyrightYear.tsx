/** Rendered at build time; the year refreshes on each deployment. */
export async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
