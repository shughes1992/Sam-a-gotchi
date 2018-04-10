function digitalPal(hungry, sleepy, bored, age) {

    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.feed = function () {
        if (this.hungry == true) {
            console.log("That was yummy!")
            return false;
            this.sleepy == true;
        } else {
            console.log("No thanks! I'm super-duper full.")
        }
    }

    this.sleep = function () {
        if (this.sleepy == true) {
            console.log("zZzZzZzZz")
            return false;
            this.bored = true;
            increaseAge();
        } else {
            console.log("No way!! I'm not tired!")

        }
    }

    this.play = function() {
        if (this.bored == true) {
            console.log("YAY!! Let's play.")
            return false;
            this.hungry = true;
        }else {
            console.log("Not right now. Later?")
        }
    }

    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + "years  old.")
    }

}

var dog = new digitalPal(true, false, true, 0);
dog.outside = false;
dog.bark = function () {
    console.log("Woof!! Woof!!")
}
dog.goOutside = function () {
    if (this.outside == false) {
        console.log("Yay! I love the outdoors!")
        return true;
        bark();
    }else {
        console.log("We're already outside though....?");
    }
}
dog.goInside = function() {
    if (dog.outside == true) {
        console.log("Do we have to? Fine ....")
        return false;
    }else {
        console.log(" Im already inside...")
    }
}

var cat = new digitalPal(true,false,true,0);
cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow! Meow!")
}
    houseCondition--;
    console.log("Muahahha! Take that, furniture!")
    cat.bored = false;
    cat.sleepy = true;
    
    if (houseCondition == 0) {
        console.log("Game Over");

    }

cat.buyNewFurniture = function () {
    houseCondition++;
    console.log("Are you sure about that?");
}


shug.feed();
shug.sleep();
shug.play();

