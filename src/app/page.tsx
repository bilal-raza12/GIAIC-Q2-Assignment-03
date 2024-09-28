
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="main home-page-content">
      <div className="description">
        <p>Hey! I am <strong>Muhammad Bilal Raza</strong>. I am a Front End Devloper and a passioante and dedicated student of GIAIC.</p>
      </div>
      <div className="profile-pic">
        <img src="/images/profile-pic.png" alt="" />
      </div>
    </div>
    <Footer />
    </>
  )
}
