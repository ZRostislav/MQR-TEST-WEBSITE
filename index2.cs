@page
@model Web.Razor.Pages.En.SignUpModel

@section Stylesheets {
    <link href="~/_content/Web.Razor/SignUp/style.css" rel="stylesheet" />
}

@{
    ViewData["Title"] = "Sign Up";
}

<body class="align">
    <div class="grid align_item">
        <div class="register">
            <img class="site_logo" src="~/_content/Web.Razor/SignUp/logo.png", alt="Site Logo"/>
            <h2>Sign Up</h2>
            <form asp- method="post" class="form">
                <div asp-validation-summary="All" class="text-danger"></div>
                
                <div class="form_field">
                    <label asp-for="Username"></label>
                    <input asp-for="Username" class="border" placeholder="XXX_Monkey_King_XXX">
                    <span asp-validation-for="Username" class="text-danger"></span>
                </div>
                
                <div class="form_field">
                    <label asp-for="Password"></label>
                    <input asp-for="Password" class="border" placeholder="Enter Password Here">
                    <span asp-validation-for="Password" class="text-danger"></span>
                </div>
                
                <div class="form_field">
                    <label asp-for="ConfirmPassword"></label>
                    <input asp-for="ConfirmPassword" class="border" placeholder="Confirm Password Here">
                    <span asp-validation-for="ConfirmPassword" class="text-danger"></span>
                </div>
                
                <div class="form_field">
                    <label asp-for="Email"></label>
                    <input asp-for="Email" class="border" placeholder="info@mailaddress.com">
                    <span asp-validation-for="Email" class="text-danger"></span>
                </div>
                
                <div class="form_field">
                    <label asp-for="Gender"></label>
                    <select asp-for="Gender" asp-items="Model.Genders" class="border" placeholder="Gender">
                        <option disabled selected>SELECT</option>
                    </select>
                    <span asp-validation-for="Gender" class="text-danger"></span>
                </div>
                
                <div class="form_field">
                    <label asp-for="Date"></label>
                    <input asp-for="Date" class="border">
                    <span asp-validation-for="Date" class="text-danger"></span>
                </div>
                
                <div class="form_field">
                    <label asp-for="Region"></label>
                    <select asp-for="Region" asp-items="Model.Regions" class="border" placeholder="Region">
                        <option disabled selected>SELECT</option>
                    </select>
                    <span asp-validation-for="Region" class="text-danger"></span>
                </div>
                <br/>
                <div class="form_field">
                    <input type="submit" value="Sign Up">
                </div>
            </form>
        </div>
    </div>
</body>