using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class Add_URLInActor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "publicId",
                table: "Actors",
                newName: "PublicId");

            migrationBuilder.AddColumn<string>(
                name: "URL",
                table: "Actors",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "URL",
                table: "Actors");

            migrationBuilder.RenameColumn(
                name: "PublicId",
                table: "Actors",
                newName: "publicId");
        }
    }
}
