import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/barbershopac-ae179.appspot.com/o/barbershop.jpg?alt=media&token=0d1c3944-d5c1-456a-b5e3-ef9380f00839" alt="foto"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <Agenda/>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}