// Interview question from a company that has Google, Dropbox, and Zillow as clients.

function monthRange(start, end) {
    if (!(start > 0 && end > 0 && start <= 12 && end <= 12)) {
        return [];
    }

    if (start === end) {
        return [start];
    }

    const months = [];
    let monthNum = start;

    while (monthNum !== end) {
        months.push(monthNum);

        if (monthNum === 12) {
            monthNum = 0;
        }
        monthNum++;
    }

    months.push(end);
    return months;
}

function monthRange(start, end) {
    if (!(start > 0 && end > 0 && start <= 12 && end <= 12)) {
        return [];
    }

    if (start === end) {
        return [start];
    }

    const months = [];
    const count = start < end ? end - start : 12 - start + end;

    for (let n = start, i = 0; i < count + 1; n++, i++) {
        months.push(n === 12 ? 12 : n % 12);
    }

    return months;
}