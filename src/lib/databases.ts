import MysqlLogo from '@/assets/mysql_logo.png';
import PostgresqlLogo from '@/assets/postgresql_logo.png';
import MariaDBLogo from '@/assets/mariadb_logo.png';
import SqliteLogo from '@/assets/sqlite_logo.png';
import SqlServerLogo from '@/assets/sql_server_logo.png';
import MysqlLogo2 from '@/assets/mysql_logo_2.png';
import PostgresqlLogo2 from '@/assets/postgresql_logo_2.png';
import MariaDBLogo2 from '@/assets/mariadb_logo_2.png';
import SqliteLogo2 from '@/assets/sqlite_logo_2.png';
import SqlServerLogo2 from '@/assets/sql_server_logo_2.png';
import GeneralDBLogo2 from '@/assets/general_db_logo_2.png';
import { DatabaseType } from './domain/database-type';

export const databaseTypeToLabelMap: Record<DatabaseType, string> = {
    [DatabaseType.GENERIC]: 'Generic',
    [DatabaseType.POSTGRESQL]: 'PostgreSQL',
    [DatabaseType.MYSQL]: 'MySQL',
    [DatabaseType.SQL_SERVER]: 'SQL Server',
    [DatabaseType.MARIADB]: 'MariaDB',
    [DatabaseType.SQLITE]: 'SQLite',
};

export const databaseLogoMap: Record<DatabaseType, string> = {
    [DatabaseType.MYSQL]: MysqlLogo,
    [DatabaseType.POSTGRESQL]: PostgresqlLogo,
    [DatabaseType.MARIADB]: MariaDBLogo,
    [DatabaseType.SQLITE]: SqliteLogo,
    [DatabaseType.SQL_SERVER]: SqlServerLogo,
    [DatabaseType.GENERIC]: '',
};

export const databaseSecondaryLogoMap: Record<DatabaseType, string> = {
    [DatabaseType.MYSQL]: MysqlLogo2,
    [DatabaseType.POSTGRESQL]: PostgresqlLogo2,
    [DatabaseType.MARIADB]: MariaDBLogo2,
    [DatabaseType.SQLITE]: SqliteLogo2,
    [DatabaseType.SQL_SERVER]: SqlServerLogo2,
    [DatabaseType.GENERIC]: GeneralDBLogo2,
};
