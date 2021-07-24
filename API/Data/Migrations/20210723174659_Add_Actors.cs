using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class Add_Actors : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublicId",
                table: "Actors");

            migrationBuilder.DropColumn(
                name: "URL",
                table: "Actors");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PublicId",
                table: "Actors",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "URL",
                table: "Actors",
                type: "TEXT",
                nullable: true);
        }
    }
}
