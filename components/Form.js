import Link from "next/link";
import Image from "next/image";

export default function Form() {
  return (
    <form action="/api/form" method="post">
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Your email</label>
      <input type="mail" id="email" name="email" required />

      <button type="submit">Submit</button>
    </form>
  );
}
