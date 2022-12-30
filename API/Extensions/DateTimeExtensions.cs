namespace API.Extensions
{
    // TODO
    // Add leap year and non leap year code
    // https://stackoverflow.com/questions/3054715/c-sharp-calculate-accurate-age
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateOnly dob)
        {
            var today = DateOnly.FromDateTime(DateTime.UtcNow);

            var age = today.Year - dob.Year;

            if (dob > today.AddYears(-age)) age -- ;

            return age;
        }
    }
}