import { Footer } from "./Footer";
import { Proyectos } from "./Proyectos";
import { proyectos } from "../mocks/proyectos.json";

export function Home() {
    return (
        <>
            <section className="animate__animated animate__fadeInRight">
                <Proyectos proyectos={proyectos} />
            </section>
            <hr />
            <Footer />
        </>
    );
}
