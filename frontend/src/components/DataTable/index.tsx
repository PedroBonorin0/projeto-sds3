const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>21/04/2021</td>
                        <td>Gilberto Braga</td>
                        <td>25</td>
                        <td>24</td>
                        <td>25000.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Renata Bonorino</td>
                        <td>12</td>
                        <td>11</td>
                        <td>12000.00</td>
                    </tr>
                    <tr>
                        <td>23/04/2021</td>
                        <td>Carlos Eduardo</td>
                        <td>13</td>
                        <td>10</td>
                        <td>13000.00</td>
                    </tr>
                    <tr>
                        <td>24/04/2021</td>
                        <td>Maria Julia</td>
                        <td>40</td>
                        <td>35</td>
                        <td>40000.00</td>
                    </tr>
                    <tr>
                        <td>25/04/2021</td>
                        <td>Pedro Luiz</td>
                        <td>76</td>
                        <td>56</td>
                        <td>76000.00</td>
                    </tr>
                    <tr>
                        <td>26/04/2021</td>
                        <td>Rosina Maria</td>
                        <td>26</td>
                        <td>25</td>
                        <td>26000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;