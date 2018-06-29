import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import {User} from '../../../../../common/models';

/**
 * Users model.
 *
 * @todo Add js-doc
 *
 * @class
 */
@Entity()
export class Users implements User {
    @PrimaryGeneratedColumn()
    public id: number | undefined;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public thirdName: string;

    @Column()
    public login: string;

    @Column()
    public password: string;

    constructor(data?: User) {
        if (data && data.id) {
            this.id = data.id;
        }

        this.firstName = data && data.firstName || '';
        this.lastName = data && data.lastName || '';
        this.thirdName = data && data.thirdName || '';
        this.login = data && data.login || '';
        this.password = data && data.password || '';
    }
}
