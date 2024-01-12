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

    function onResize(
        node: HTMLDivElement,
        callback: (entry: DOMRectReadOnly) => void,
        ): SvelteActionReturnType {
        // ...
    }

    interface Transaction{
        date: string;
        category: string;
        amount: number;
        description: string;
    }
</script>

<div class="transactions-grid" >
    {#each Object.keys(data) as category, i}
        <div class="column">
            <div class="header">
                <h5>{category}</h5>
            </div>
            <table>
                {#each data[category] as trans, i}
                    <tr>
                        <td><div class="currSign">{trans.amount}</div></td>
                    </tr>
                {/each}
        </table>
        </div>
    {/each}
</div>

<style>
    .currSign:before {
        content: '$';
    }

    .transactions-grid {
        display: grid;
        grid-auto-flow: column;
        gap: 0px;
        grid-auto-rows: minmax(100px, auto);
        color: black;
        border: 2px solid var(--theme-color);
        width: 100%;

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