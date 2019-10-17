export class RenameService {
    static run(str: string) {
        if (!new RegExp('^[аеёиоуыэюяйцкнгшщзхъфвпрлджчсмтьб]*$').test(str)) {
            return ''
        }

        str = str.replace(new RegExp('^[йцкнгшщзхъфвпрлджчсмтьб]+'), '')
        if (str.length === 0 ) {
            return 'хуй'
        }

        let first = str[0]

        switch (first) {
            case 'у':
                first = 'ю'
                break
            case 'ы':
                first = 'и'
                break
            case 'а':
                first = 'я'
                break
            case 'о':
                first = 'ё'
                break
            case 'э':
                first = 'е'
                break
        }

        return `ху${first}${str.slice(1)}`
    }
}