import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

function sort<T>(data: T[], sorter: (a: T, b: T) => number): T[]{
    const sorted = data.sort(sorter)
    return sorted
}

// console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
// console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// console.log("======================================")
// // Sort colleagues by extension number
console.log(
  sort<Colleague>(colleagues.current,(a, b) => a.contact.extension - b.contact.extension
  )
);

