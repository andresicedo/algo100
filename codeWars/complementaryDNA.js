/*
In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". You have function with one side of the DNA (string, 
except for Haskell); you need to get the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except 
for Haskell).
*/

let DNAStrand = (dna) => {
    let complementary = [];
    
    for (let i = 0; i < dna.length; i++) {
        const strand = dna[i];
        if (strand === "A") complementary.push("T");
        if (strand === "T") complementary.push("A");
        if (strand === "C") complementary.push("G");
        if (strand === "G") complementary.push("C");
    }
    return complementary.join("");
}

console.log(DNAStrand('ATTGC'))//TAACG
console.log(DNAStrand('GTAT'))//CATA