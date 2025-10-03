
export interface RecoverBoardInput {
    upperCounts: number
    lowerCounts: number
    columnValues: number[]
}

export function recoverBoard(input: RecoverBoardInput): string {
    
    // initialize to new values to allow mutation as we iterate
    let upperCounter = input.upperCounts
    let lowerCounter = input.lowerCounts

    const columnValues = input.columnValues //don't want to mutate original array in any way, instantiate new variable

    let isPossible = true

    const upperResultArray: number[] = []
    const lowerResultArray: number[] = []

    for(const value of columnValues){
        if(value === 2){
            if(upperCounter < 1 || lowerCounter < 1){

                isPossible = false
                break
            }else{
                upperResultArray.push(1)
                lowerResultArray.push(1)

                lowerCounter --
                upperCounter --
            }
        }else if(value === 1){
            if(upperCounter > 0){ //default to pushing to upper array as a conscious decision
                upperResultArray.push(1)
                lowerResultArray.push(0)

                upperCounter --
            }else if(lowerCounter > 0){
                lowerResultArray.push(1)
                upperResultArray.push(0)

                lowerCounter --
            }else{
                isPossible = false
                break
            }
        }else {
            upperResultArray.push(0)
            lowerResultArray.push(0)
        }
    }

    if(!isPossible){ //more typical to throw an error, but in keeping with the ask of the assignment
        return 'IMPOSSIBLE'
    }

    //this was the missing case, assuming that if there is "extra" values left in the counters, then some data is possibly missing.
    if(upperCounter > 0 || lowerCounter > 0){
        return 'IMPOSSIBLE'
    }

    return upperResultArray.join('') + ',' + lowerResultArray.join('')
}