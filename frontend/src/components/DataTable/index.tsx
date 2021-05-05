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
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>20/11/2020</td>
                        <td>Douglas Luiz</td>
                        <td>25</td>
                        <td>12</td>
                        <td>14000.00</td>
                    </tr>
                    <tr>
                        <td>29/01/2019</td>
                        <td>Cristina Column</td>
                        <td>42</td>
                        <td>11</td>
                        <td>18520.00</td>
                    </tr>
                    <tr>
                        <td>05/12/2013</td>
                        <td>Alicia Gonçalves</td>
                        <td>27</td>
                        <td>10</td>
                        <td>21250.00</td>
                    </tr>
                    <tr>
                        <td>15/10/2015</td>
                        <td>Dominic Toreto</td>
                        <td>39</td>
                        <td>21</td>
                        <td>19015.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;