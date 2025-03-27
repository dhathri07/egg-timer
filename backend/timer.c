#include <stdio.h>
#include <unistd.h>

void countdown(int seconds) {
    for (int i = seconds; i > 0; i--) {
        printf("\rTime left: %d seconds  ", i);
        fflush(stdout);
        sleep(1);
    }
    printf("\nTime's up! Your egg is boiled.\n");
}

int main() {
    int seconds = 120;  // 2 minutes
    printf("Starting the boiling egg timer for %d seconds...\n", seconds);
    countdown(seconds);
    return 0;
}
