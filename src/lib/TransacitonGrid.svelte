<div class="transactions-grid">
    {#each Object.keys(data) as category, i}
        <div class="column">
            <div class="header">
                <h5>{category}</h5>
            </div>
            <table>
                <th>Amount</th>
                {#each data[category] as trans, i}
                    <tr>
                        <td>{trans.amount}</td>
                    </tr>
                {/each}
        </table>
        </div>
    {/each}
</div>

<style>
    .transactions-grid {
        display: grid;
        grid-template-columns: 100px;
        grid-auto-flow: column;
        grid-auto-columns: 100px;
        gap: 0px;
        grid-auto-rows: minmax(100px, auto);

        & table {
            margin: auto
        }

        & th {
            text-align: center;
        }

        & td {
            text-align: center;
        }

        & .column {
            border: 2px solid var(--theme-color);
        }
    }
</style>

<script context="module" lang="ts">
    import testData from "../../sampledata.json"

    let data = getData();

    function getData(): Record<string, Transaction[]> {
        let transactions: Transaction[] = testData.transactions;

        let transactionsByCategory : Record<string, Transaction[]> = {};

        transactions.forEach(trans => {
            if(transactionsByCategory[trans.category] === undefined) transactionsByCategory[trans.category] = [];
            let categoryArray = transactionsByCategory[trans.category];

            categoryArray.push(trans)
        });

        let keys = transactionsByCategory.keys;
        let otherKeys = Object.keys(transactionsByCategory);

        return transactionsByCategory
    };

    interface Transaction{
        date: string;
        category: string;
        amount: number;
        description: string;
    }
</script>