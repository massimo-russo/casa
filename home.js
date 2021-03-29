function Base(){
    return(
        <div className="base">
        </div>
    )
}
function Camino(){
    return(
        <div className="camino">
        </div>
    )
}
function Finestra(){
    return(
        <div className="finestra">
        </div>
    )
}

function Porta(){
    return(
        <div className="porta">
        </div>
    )
}
function Tetto(){
    return(
        <div className="tetto">
            <div className="TettoInterno"/>
				<div className="Ripiano" />
            <Camino />
        </div>
    )
}
function Facciata(){
    return(
        <div className="facciata">
            <Finestra />
            <Porta />
        </div>
    )
}
const casa = (
	<div className="fronte">
		<Tetto />
		<Facciata />
        <Base />
	</div>
)

/*domreader*/
ReactDOM.render(
    casa,
    document.getElementById('root')
  )